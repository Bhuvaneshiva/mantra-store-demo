import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ProductListItem from "./item/item";

import { IProduct } from "@/types/product";

type Props = {
    count: number;
    page: number;
    products: IProduct[];
};

const ProductsList = ({ products, count, page }: Props) => {
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                List of products
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {products.map((product) => (
                    <Grid
                        item
                        key={product._id}
                        xs={3}
                        sx={{
                            display: "flex",
                            alignItems: "stretch",
                            mb: 2,
                        }}
                    >
                        <ProductListItem product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProductsList;
