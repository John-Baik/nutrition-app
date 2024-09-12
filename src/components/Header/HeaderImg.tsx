export default function HeaderImg(props: { src: string }) {
  return (
    <>
      <div className="md:px-14 md:pt-14">
        <img className=" md:rounded-xl" src={props.src}></img>
      </div>
    </>
  );
}
