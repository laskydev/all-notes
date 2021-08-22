import React from "react";
import { Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";

interface HeadlineProps {
  type: Variant;
  color:
    | "inherit"
    | "initial"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error"
    | undefined;
}

export const Headline: React.FunctionComponent<HeadlineProps> = ({
  children,
  type,
  color,
}) => (
  <Typography variant={type} color={color}>
    {children}
  </Typography>
);
