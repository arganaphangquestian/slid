import { useRouter } from "next/router";

const Slide = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <h1>Detail Slides {slug}</h1>
    </>
  );
};

export default Slide;
