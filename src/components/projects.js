import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";

const innerH = typeof window !== `undefined` ? window.innerHeight : 600;
const style = css`
  height: 200px;
`;
const Projects = () => {
  return (
    <div
      id="projects"
      css={css`
        width: 100%;
        background-color: #fdfdfd;
        min-height: ${`${innerH}px`};
      `}
    >
      <h3>Projects</h3>
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <Paper className="paper" css={style}>
            item
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper className="paper" css={style}>
            item
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper className="paper" css={style}>
            item
          </Paper>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <Paper className="paper" css={style}>
            item
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper className="paper" css={style}>
            item
          </Paper>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Paper className="paper" css={style}>
            item
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
