function Countertest({
  border,
  width,
  height,
  borderRadius,
  mau,
  title,
  marginTop
}) {
  return (
    <div className="countertest">
      <button
        className="btn"
        style={{
          border: border,
          width:width ,
          height:height ,
          borderRadius:borderRadius ,
          background: mau ,
          marginTop: marginTop
        }}
      >
        {title}
      </button>
    </div>
  );
}
export default Countertest;
