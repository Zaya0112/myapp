export const Box = ({ value }) => {
    console.log(value)
    return (
        <div
            style={{
               
                height: "440px",
                backgroundColor: "white",
                width: "364px",
                overflow: "hidden",
                borderRadius: "30px",
                paddingLeft:"20px"
                
            }} >
            <img style={{
                height: "147px",
                width: "370px",
                padding:
                    "30px,30px, 0px, 0px",
            }} src={value.imageUrl} />
            <p style={{
                width: "330px",
                height: "58px",
                paddingTop: "22px",
                fontSize: "24px",
                lineHeight: "29px",
            }}>{value.title}</p>
            <p style={{

                width: "318px",
                height: "58px",
                fontSize: "14px",
                paddingTop: "22px",
                lineHeight: "29px",
            }}>{value.description}</p>

            <div style={{
                display:"flex",
                gap:"15px",
                alignItems:"center",
                paddingLeft:"30px",
                paddingTop:"75px",
            }}>
                <img style={{
                width: "44.51px",
                height: "45px",
                
            }}
                src={value.avatarImage} />
            <p style={{
                color: "#6D7D8B",
               
                width: "80px",
                height: "18px",
                fontSize: "12px",

            }}>{value.blogReviewname}</p>
            <p>|</p>
            <p style={{
                color: "#6D7D8B",
                width: "102px",
                height: "18px",
                fontSize:"12px",

            }}>{value.date}</p>
            </div>

        </div>

    )
}