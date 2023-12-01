
export const Review = [
    {
        sentence: "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
        name: "Amy Klassen",
        imageUrl: "/zurag1.jpg"
    },
    {
        sentence:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        name: "Jane Cooper",
        imageUrl: "/zurag2.jpg"
    },
];


    <div
        style={{
            backgroundColor: "black",
            width: "366px",
            height: "374px",
            marginLeft: "141px",
        }}

    >


        {Review.map((value, index) => {
            return (
                <div
                    style={{
                        height: "100vh",
                        width: "100vh",
                        display: "flex",
                        gap: "20px",

                    }}

                    key={index}
                >
                    <p style={{ color: "black" }}>{value.sentence}</p>
                    <p style={{ color: "black" }}>{value.sentence}</p>
                    <img src="/zurag1"/>
                </div>
            );

        })};
    </div>
    



