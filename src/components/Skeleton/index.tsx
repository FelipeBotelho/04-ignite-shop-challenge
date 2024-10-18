import { SkeletonContainer, SkeletonContent } from "@/styles/components/skeleton";

export function Skeleton({...props}) {
  return (
   <SkeletonContainer {...props}>
    <div>
      <SkeletonContent />
      <SkeletonContent />
    </div>
  </SkeletonContainer>
  )
}