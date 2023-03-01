import { useEffect, useState } from "react";
import { createStyles } from "@mantine/core";
import { getReports, blockReport, resolveReport } from "../../data";
import { StatsRingCard } from "../Card";

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

export const CardList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports().then(setReports)
  }, [])

  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      {reports.map(x =>
        <StatsRingCard
          id={x.id}
          type={x.payload.reportType}
          state={x.state}
          message={x.payload.message}
          onBlock={(id) => blockReport(id)}
          onResolve={(id) => resolveReport(id)}
        />
      )}
    </div>
  )
}
