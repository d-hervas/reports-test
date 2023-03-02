import { createStyles, Text, Card, Button, Grid, Anchor } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    maxWidth: '50rem'
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 1,
  },

  inner: {
    display: 'flex',

    [theme.fn.smallerThan(350)]: {
      flexDirection: 'column',
    },
  },

  ring: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.fn.smallerThan(350)]: {
      justifyContent: 'center',
      marginTop: theme.spacing.md,
    },
  },
}));

export function StatsRingCard({ id, type, state, message, onBlock, onResolve }) {
  const { classes } = useStyles();

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <Grid grow gutter='md' justify='space-between'>
          <Grid.Col span={6}>
            <Text size="l" className={classes.label}>
              Id: {id}
            </Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text size="l" className={classes.label}>
              Type: {type}
            </Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text size="l" className={classes.label}>
              Message: {message}
            </Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Text size="l" className={classes.label}>
              State: {state}
            </Text>
          </Grid.Col>

          <Grid.Col span={6}>
            <Anchor size="l">
              Details
            </Anchor>
          </Grid.Col>


        </Grid>

        <div className={classes.ring}>
          <Button.Group orientation="vertical">
            <Button variant="default" onClick={() => onBlock(id)}>Block</Button>
            <Button variant="filled" onClick={() => onResolve(id)}>Resolve</Button>
          </Button.Group>
        </div>

      </div>
    </Card >
  );
}