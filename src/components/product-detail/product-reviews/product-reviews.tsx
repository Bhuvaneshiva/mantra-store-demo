import { IReview } from "@/types/product";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    Typography,
} from "@mui/material";

type Props = {
    // productId: string | undefined;
    reviews: IReview[];
};

const ProductReviews = ({ reviews }: Props) => {
    if (!reviews || (reviews.length && reviews.length === 0)) {
        return <p>No reviews yet. Be the first one to add a review!</p>;
    }

    return (
        <div>
            <h2>Reviews</h2>
            <List>
                {reviews.map((review) => (
                    <ListItem key={review._id} sx={{ my: 3 }}>
                        <ListItemAvatar>
                            <Avatar>{review.username.substring(0, 1)}</Avatar>
                        </ListItemAvatar>
                        <div>
                            <div>{review.date.toString()}</div>
                            <div>
                                <Rating
                                    name="read-only"
                                    value={review.rating}
                                    readOnly
                                />
                                <Typography component="div">
                                    {review.text}
                                </Typography>
                            </div>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ProductReviews;
