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
  const [reportsChanged, setReportsChanged] = useState(true)

  useEffect(() => {
    if (reportsChanged) {
      getReports().then(setReports)
      setReportsChanged(false)
    }
  }, [reportsChanged])

  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      {reports.map(x =>
        <StatsRingCard
          key={x.id}
          id={x.id}
          type={x.payload.reportType}
          state={x.state}
          message={x.payload.message}
          onBlock={(id) => blockReport(id)}
          onResolve={(id) => resolveReport(id).then((res) => {
            if (res.ok) {
              setReportsChanged(true)
            }
          })}
        />
      )}
    </div>
  )
}
