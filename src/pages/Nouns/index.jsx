import Tabs from "../../components/Tabs";

// š ž č į ų

const nounsData = {
  vard: {
    name: "vard.",
    question: "",
    questionTranslate: "",
    singular: ["as", "us", "ias", "is", "ys", "ius", "a", "ia", "is", "ė"],
    plural: ["ai", "ai", "iai", "iai", "iai", "iai", "os", "ios", "ys", "ės"],
  },
  kilm: {
    name: "kilm.",
    question: "Ko?",
    questionTranslate: "Кого? Чего,",
    singular: ["as → o", "is → io", "ys → io", "a → os", "ė → ės", "us → aus"],
    plural: ["ai → ų", "os → ų", "ės → ų", "ys → ų", "us → ų", "iai → ų"],
  },
  gal: {
    name: "gal.",
    question: "Ką?",
    questionTranslate: "Что?",
    singular: ["as → ą", "is → į", "ys → į", "a → ą", "ė → ę", "us → ų"],
    plural: [
      "ai → us",
      "os → as",
      "ės → es",
      "ys → is",
      "us → us",
      "iai → ius",
    ],
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
    plural: [
      "ai → ouse",
      "os → ose",
      "ės → ėse",
      "ys → yse",
      "us → uose",
      "iai → iuose",
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
    <div className="flex flex-col items-center w-full">
      <p>
        <h3>{question}</h3>
        <span>{questionTranslate}</span>
      </p>
      <div className="flex flex-row w-full justify-around">
        <div className="flex flex-col mt-4 text-xl">
          <span className="text-2xl text-center">🧘‍♀️</span>
          {singular.map((item, id) => (
            <span key={`${name}-singular-${id}`}>{item}</span>
          ))}
        </div>
        <div className="flex flex-col mt-4 justify-center text-xl">
          <span className="text-2xl text-center">👩‍👩‍👧‍👧</span>
          {plural.map((item, id) => (
            <span key={`${name}-singular-${id}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Nouns = () => {
  return (
    <div className="flex flex-col m-8 items-center">
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
    </div>
  );
};
