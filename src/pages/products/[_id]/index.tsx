import Head from "next/head";
import { GetStaticPropsContext } from "next";

import ProductDetail from "@/components/product-detail/product-detail";
import { getProductById, getProductsIds } from "@/data/services/products";
import { IProduct } from "@/types/product";

type Props = {
    _id: string;
    product: IProduct;
};

const ProductDetailPage = ({ _id, product }: Props) => {
    return (
        <>
            <Head>
                <title>{product?.title || "Product details"}</title>
                <meta name="description" content={product?.description || ""} />
            </Head>
            <ProductDetail productId={_id} product={product} />
        </>
    );
};

export const getStaticProps = async (
    context: GetStaticPropsContext<{ _id: string }>
) => {
    const { params } = context;
    const _id = params?._id as string;

    return {
        props: {
            _id: _id,
            product: await getProductById(_id),
        },
        revalidate: 60, // ISG - regenerated every 60 seconds
    };
};

// ...component code, getStaticProps() code


// {
//     paths : {
//         params: {
//             id: [ 1234, 2345, 3456 ],
//         }

//     }
// }
export const getStaticPaths = async () => {
    const _ids = await getProductsIds();
    return {
        paths: _ids.map((_id) => {
            return {
                params: { _id: _id },
            };
        }),
        fallback: true,
    };
};

export default ProductDetailPage;
