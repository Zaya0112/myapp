export const Box = (
  title,
  description,
  imageUrl,
  avatarImage,
  blogReviewName,
  date
) => {
  return (
    <div
      style={{
        paddingLeft: "141px",
        paddingTop: "69px",
      }}
    >
      <div
        id="box"
        style={{
          height: "440px",
          width: "363px",
          backgroundColor: "white",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <img style={{ width: "370px", height: "147px" }} src="imageurl"></img>
        <div style={{ paddingLeft: "35px" }}>
          <p
            style={{
              width: "330px",
              height: "58px",
              fontSize: "24px",
              paddingTop: "22px",
              lineHeight: "24px",
            }}
          >
            (title)
          </p>
          <p>(description)</p>
          <p>(imageUrl)</p>
          <p>(avatarImage)</p>
          <p>(blogReviewname)</p>
          <p>(date)</p>
        </div>
      </div>
    </div>
  );
};
