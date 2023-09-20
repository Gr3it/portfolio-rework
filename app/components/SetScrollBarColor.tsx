"use client";

import React, { useEffect } from "react";

const SetScrollBarColor = ({ color = "" }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--Scrollbar-color", color);
  }, [color]);

  return null;
};

export default SetScrollBarColor;
