import { styled } from "..";



export const SkeletonContainer = styled('div', {
  width: '120rem',
  marginLeft: '25%',
  height: 656,
  display: 'grid',

  div: {
    display: 'flex',
    gap: '5rem',
  }
})

export const SkeletonContent = styled('div', {
  backgroundColor: '$gray800',
  backgroundImage: "linear-gradient(90deg, $gray800, $gray700, $gray800)",
  backgroundSize: "200px 100%",
  backgroundRepeat: "no-repeat",
  width: '100%',
  height: '100%',
  borderRadius: 8,
})