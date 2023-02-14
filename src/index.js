import React, { useState, useLayoutEffect } from "react";

const HEIGHT_RATIO = 3.375;

const getImage = (locale = "en-us") => {
  return {
    ios: `https://linkmaker.itunes.apple.com/images/badges/${locale}/badge_appstore-lrg.svg`,
    android: `https://bitte-tecnologia.github.io/google-play-badge-svg/img/${locale}_get.svg?sanitize=true`,
  };
};

const ReactStoreBadge = ({
  platform,
  url,
  locale = (typeof navigator !== "undefined" && navigator.language) ||
    defaultLocale,
  defaultLocale = "en-us",
  width = 135,
  height = width / HEIGHT_RATIO,
  newWindow = true,
}) => {
  locale = locale.toLowerCase();
  const isUrlSet = url.length > 0;

  // handles ptBR
  const nonHyphenatedRegex = /^[a-zA-Z]{4}$/;
  if (locale.match(nonHyphenatedRegex)) {
    locale = `${locale.slice(0, 2)}-${locale.slice(2)}`;
  }

  const [image, setImage] = useState(getImage(locale));

  const setDefaultImage = () => {
    setImage(getImage(defaultLocale));
  };

  useLayoutEffect(() => {
    setImage(getImage(locale));
  }, [locale]);

  return (
    <a
      style={{
        display: "inline-block",
        height: height,
        width: width,
        cursor: isUrlSet ? "pointer" : "default",
      }}
      href={url}
      target={newWindow ? "_blank" : "_self"}
      onClick={(event) => !isUrlSet && event.preventDefault()}
    >
      <img
        src={image[platform]}
        style={{
          width: "100%",
          height: "100%",
          filter: isUrlSet ? "" : "blur(2px)",
        }}
        onError={setDefaultImage}
      />
    </a>
  );
};
export default ReactStoreBadge;
