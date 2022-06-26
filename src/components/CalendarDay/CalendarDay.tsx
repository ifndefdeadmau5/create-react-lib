/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { Box, BoxProps } from "@mui/material";
// import { DateTime } from "luxon";
import { forwardRef } from "react";

const rootStyle = css`
  grid-row: span 2;
  min-height: 135px;
  background-color: white;
  border: 1px solid black;
  color: yellow;
  font-size: 100px;
`;

interface CalendarDayProps {
  //   droppableId?: string;
  //   date: DateTime;
  highlight?: boolean;
}

const CalendarDay = (
  {
    // children,
    // droppableId,
    // date,
    highlight = false,
    ...others
  }: CalendarDayProps,
  ref
) => {
  //   const day = date.get("day");
  //   const isLastSevenDay = day > date.daysInMonth - 7;
  //   const today = DateTime.now().startOf("day");
  //   const isToday = date.startOf("day").equals(today);

  return (
    <div ref={ref} css={rootStyle} {...others}>
      {/* {children} */}
      meh
    </div>
  );
};

export default forwardRef(CalendarDay);
