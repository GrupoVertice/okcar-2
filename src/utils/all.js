/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es-mx", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";