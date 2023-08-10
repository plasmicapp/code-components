import {
  createContext,
  CSSProperties,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import sty from "./ItemGallery.module.css";
import classNames from "classnames";
import {
  exampleCmsData,
  exampleCollectionData,
  exampleProductData,
} from "./ItemGalleryExampleData";
import { repeatedElement } from "@plasmicapp/loader-nextjs";

const productFragment = `
fragment ProductFragment on Product {
  availableForSale
  collections(first: 5) {
    edges {
      node {
        handle
      }
    }
  }
  createdAt
  description
  descriptionHtml
  handle
  id
  images(first: 5) {
    edges {
      node {
        id
        transformedSrc
        width
        height
      }
    }
  }
  metafield(key: "app_key", namespace: "affiliates") {
    description
  }
  onlineStoreUrl
  options {
    name
    values
  }
  priceRange {
    maxVariantPrice {
      amount
    }
    minVariantPrice {
      amount
    }
  }
  productType
  publishedAt
  seo {
    title
    description
  }
  title
  updatedAt
  variants(first: 5) {
    edges {
      node {
        availableForSale
        currentlyNotInStock
        id
        image {
          id
          transformedSrc
          width
          height
        }
        priceV2 {
          amount
        }
        requiresShipping
        sku
        title
        unitPrice {
          amount
        }
      }
    }
  }
}
`;

const allProductsQuery = `
query Products($first: Int!, $query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
  products(first: $first, query: $query, sortKey: $sortKey, reverse: $reverse) {
    edges {
      node {
        ...ProductFragment
      }
    }
  }
}

${productFragment}
`;

const collectionQuery = `
query Collection($handle:String!){
  collectionByHandle(handle:$handle){
    products(first:99){
      edges{
        node{
          ...ProductFragment
        }
      }
    }
  }
}

${productFragment}
`;

interface ItemGalleryProps {
  scroller?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  columns?: number;
  columnGap?: number;
  rowGap?: number;
}

export function ItemGallery({
  scroller = false,
  children,
  className,
  columns = 1,
  columnGap = 0,
  rowGap = 0,
}: ItemGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  useEffect(() => {
    scrollerRef.current?.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [left]);
  const cardWidth = 200,
    gap = 10;
  function slide(n: number) {
    setLeft(left + n * (cardWidth + gap));
  }

  return scroller ? (
    <div className={`${sty.Gallery} ${className}`}>
      {scroller && (
        <button className={sty.ScrollBtn} onClick={() => slide(-1)}>
          ‹
        </button>
      )}
      <div
        className={classNames({
          [sty.Items]: true,
          [sty.Items__Scrolling]: scroller,
        })}
        ref={scrollerRef}
      >
        {children}
      </div>
      {scroller && (
        <button className={sty.ScrollBtn} onClick={() => slide(1)}>
          ›
        </button>
      )}
    </div>
  ) : (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        columnGap: `${columnGap}px`,
        rowGap: `${rowGap}px`,
      }}
    >
      {children}
    </div>
  );
}

interface ProductGalleryProps {
  count?: number;
  category?: string;
  scroller?: boolean;
  className?: string;
}
export function ProductGallery({
  category,
  count,
  ...rest
}: ProductGalleryProps) {
  const [data, setData] = useState<typeof exampleProductData | undefined>(
    undefined
  );
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://graphql.myshopify.com/api/2021-04/graphql.json",
        {
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-shopify-storefront-access-token":
              "ecdc7f91ed0970e733268535c828fbbe",
          },
          referrer: "https://shopify.dev/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: JSON.stringify({
            query: allProductsQuery,

            variables: { first: 10 },
          }),
          method: "POST",
          mode: "cors",
          credentials: "omit",
        }
      );
      const data = await response.json();
      setData(data);
    })();
  }, []);

  return (
    <ItemGallery {...rest}>
      {data?.data.products.edges.slice(0, count).map((productEdge) => {
        const product = productEdge.node;
        const image = product.images.edges[0].node;
        if (category && category !== product.productType) {
          return null;
        }
        return (
          <div key={product.id} className={sty.Item}>
            <img
              alt={product.title}
              src={image.transformedSrc}
              width={image.width}
              height={image.height}
              loading={"lazy"}
              className={sty.Thumb}
            />
            <div className={sty.Title}>{product.title}</div>
            <div className={sty.Price}>
              ${product.priceRange.maxVariantPrice.amount}
            </div>
          </div>
        );
      })}
    </ItemGallery>
  );
}

export type ProductData = typeof exampleProductData.data.products.edges[number]["node"];

const ProductBoxContext = createContext<ProductData | undefined>(undefined);
interface ProductCollectionProps extends ItemGalleryProps {
  count?: number;
  collectionHandle?: string;
}
export function ProductCollection({
  collectionHandle,
  count,
  children,
  ...rest
}: ProductCollectionProps) {
  const [data, setData] = useState<typeof exampleCollectionData | undefined>(
    undefined
  );
  useEffect(() => {
    (async () => {
      if (!collectionHandle) {
        return;
      }
      const response = await fetch(
        "https://graphql.myshopify.com/api/2021-04/graphql.json",
        {
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-shopify-storefront-access-token":
              "ecdc7f91ed0970e733268535c828fbbe",
          },
          referrer: "https://shopify.dev/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: JSON.stringify({
            query: collectionQuery,
            variables: { handle: collectionHandle },
          }),
          method: "POST",
          mode: "cors",
          credentials: "omit",
        }
      );
      const data = await response.json();
      setData(data);
    })();
  }, [collectionHandle]);

  const products = data?.data.collectionByHandle.products.edges
    .slice(0, count)
    .map((productEdge, i) => {
      const product = productEdge.node;
      return (
        <ProductBoxContext.Provider value={product} key={product.id}>
          <div>{repeatedElement(i === 0, children)}</div>
        </ProductBoxContext.Provider>
      );
    });

  return <ItemGallery {...rest}>{products}</ItemGallery>;
}

function useProduct() {
  return useContext(ProductBoxContext);
}

export function ProductImage({ className }: { className?: string }) {
  const product = useProduct();
  if (!product) return null;
  const image = product.images.edges[0].node;
  return (
    <img
      alt={product.title}
      src={image.transformedSrc}
      width={image.width}
      height={image.height}
      loading={"lazy"}
      className={className}
      style={{
        objectFit: "cover",
      }}
    />
  );
}

export function ProductTitle({ className }: { className?: string }) {
  const product = useProduct();
  if (!product) return null;
  return <div className={className}>{product.title}</div>;
}

export function ProductPrice({ className }: { className?: string }) {
  const product = useProduct();
  if (!product) return null;
  return (
    <div className={className}>
      ${product.priceRange.maxVariantPrice.amount}
    </div>
  );
}

export type CmsItem = {
  photo: string;
  title: string;
  imageCaption?: string;
  imageCredits?: string;
};

const CmsItemContext = createContext<CmsItem | undefined>(undefined);

export function CmsItemField({
  className,
  field,
}: {
  className?: string;
  field?: keyof CmsItem;
}) {
  const item = useContext(CmsItemContext);
  if (!item) {
    return <div className={className}>(Must display in a CMS item)</div>;
  }
  if (!field) {
    return <div className={className}>(Must specify a field)</div>;
  }
  if (field === "photo") {
    return (
      <img
        src={item.photo}
        loading={"lazy"}
        className={className}
        style={{
          objectFit: "cover",
        }}
      />
    );
  } else {
    return <div className={className}>{item[field]}</div>;
  }
}

interface CmsGalleryProps extends ItemGalleryProps {
  count?: number;
}

export function CmsGallery({ count, children, ...rest }: CmsGalleryProps) {
  const [data, setData] = useState<typeof exampleCmsData | undefined>(
    undefined
  );
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://cdn.contentful.com/spaces/fbr4i5aajb0w/entries?content_type=7leLzv8hW06amGmke86y8G",
        {
          headers: {
            authorization:
              "Bearer 8c6d9bb62a89a05e4f88af2784a0a3f8bcacc7b401084d50f577dfc5f6df0c61",
            "x-contentful-user-agent": "contentful.js/3.5.0",
          },
          method: "GET",
        }
      );
      const data = await response.json();
      setData(data);
    })();
  }, []);
  return (
    <ItemGallery {...rest}>
      {data?.items[1].fields.images.slice(0, count).map((item, i) => {
        // We do some dereferencing because Contentful data is shipped normalized.
        const entry = data.includes.Entry.find(
          (i) => i.sys.id === item.sys.id
        )! as typeof data.includes.Entry[0];
        const photo = entry.fields.photo;
        const asset = data.includes.Asset.find(
          (i) => i.sys.id === photo.sys.id
        )!;
        const imgSrc = (asset.fields as any).file.url + "?w=300";
        return (
          <CmsItemContext.Provider
            key={item.sys.id}
            value={{
              ...entry.fields,
              photo: imgSrc,
            }}
          >
            {repeatedElement(i === 0, children)}
          </CmsItemContext.Provider>
        );
      })}
    </ItemGallery>
  );
}
