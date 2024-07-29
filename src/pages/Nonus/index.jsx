import React from "react";
import Tabs from "../../components/Tabs";

// š ž č į

export const Nonus = () => {
  return (
    <>
      <Tabs>
        <div title="vald.">
          <span>as</span>
          <span>is</span>
          <span>ys</span>
          <span>a</span>
          <span>ė</span>
          <span>us</span>
        </div>
        <div title="kilm.">
          <p>
            <h3>Ko?</h3>
            <span> Кого? Чего?</span>
          </p>
          <div className="flex flex-col mt-4">
            <span>as → o</span>
            <span>is → io</span>
            <span>ys → io</span>
            <span>a → os</span>
            <span>ė → ės</span>
            <span>us → aus</span>
          </div>
        </div>
        <div title="naud.">This is the content of Tab 3</div>
        <div title="gal.">
          <p>
            <h3>Ką?</h3>
            <span> Что?</span>
          </p>
          <div className="flex flex-col mt-4">
            <span>as → ą</span>
            <span>is → į</span>
            <span>ys → į</span>
            <span>a → ą</span>
            <span>ė → ę</span>
            <span>us → ų</span>
          </div>
        </div>
        <div title="įang."></div>
        <div title="viet.">
          <p>
            <h3>Kur?</h3>
            <span> Куда? Где?</span>
          </p>
          <div className="flex flex-col mt-4">
            <span>as → e</span>
            <span>is → yje</span>
            <span>ys → yje</span>
            <span>a → oje</span>
            <span>ė → ėje</span>
            <span>us → ujs</span>
          </div>
        </div>
      </Tabs>
    </>
  );
};
