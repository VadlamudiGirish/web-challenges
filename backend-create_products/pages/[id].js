import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  function render_reviews(data) {
    return (
      <>
        <h3>Reviews:</h3>
        {data.reviews.map((review) => (
          <ProductCard key={review.title}>
            <h4>{review.title}</h4>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </ProductCard>
        ))}
      </>
    );
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length === 0 ? <></> : render_reviews(data)}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  margin-bottom: 10px;
`;
