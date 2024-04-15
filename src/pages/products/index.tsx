import Head from "next/head";
import ProductsList from "@/components/products-list/products-list";

export default function ProductsListPage() {
    return (
        <>
            <Head>
                <title>List of products</title>
                <meta
                    name="description"
                    content="Search through products and add them to your cart."
                />
            </Head>

            <ProductsList />
        </>
    );
}
