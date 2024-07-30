import Tabs from "../../components/Tabs";

// š ž č į

const nounsData = {
    vard: {
        name: "vard.",
        question: "",
        questionTranslate: "",
        singular: ["as", "is", "ys", "a", "ė", "us"],
    },
    kilm: {
        name: "kilm.",
        question: "Kur?",
        questionTranslate: "Кого? Чего?",
        singular: [
            "as → o",
            "is → io",
            "ys → io",
            "a → os",
            "ė → ės",
            "us → aus",
        ],
    },
    gal: {
        name: "gal.",
        question: "Ką?",
        questionTranslate: "Что?",
        singular: ["as → ą", "is → į", "ys → į", "a → ą", "ė → ę", "us → ų"],
    },
    viet: {
        name: "viet.",
        question: "Kur?",
        questionTranslate: "Куда? Где?",
        singular: [
            "as → e",
            "is → yje",
            "ys → yje",
            "a → oje",
            "ė → ėje",
            "us → ujs",
        ],
    },
};

const NounTabItem = ({
    name,
    question,
    questionTranslate,
    example,
    singular = [],
    plural = [],
}) => {
    return (
        <div className="flex flex-col items-center">
            <p>
                <h3>{question}</h3>
                <span>{questionTranslate}</span>
            </p>
            <div className="flex flex-col mt-4">
                {singular.map((item, id) => (
                    <span key={`${name}-singular-${id}`}>{item}</span>
                ))}
            </div>
        </div>
    );
};

export const Nonus = () => {
    return (
        <>
            <Tabs>
                <div title="vald.">
                    <NounTabItem {...nounsData.vard} />
                </div>
                <div title="kilm.">
                    <NounTabItem {...nounsData.kilm} />
                </div>
                <div title="naud.">N/A</div>
                <div title="gal.">
                    <NounTabItem {...nounsData.gal} />
                </div>
                <div title="įang.">N/A</div>
                <div title="viet.">
                    <NounTabItem {...nounsData.viet} />
                </div>
            </Tabs>
        </>
    );
};
