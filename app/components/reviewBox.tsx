
     export const array = [
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
    return (
        <div
            style={{
                backgroundColor: "gray",
                width: "366px",
                height: "374px",
                marginLeft: "141px",
            }}
            >
                 {array.map((value,index) => {
            return (
                <div
                
                    key={index}
                >
                    <p style={{ color: "white" }}>{value.sentence}</p>
</div>
            );   
})};
</div>
    );

