export const makeActions = (state: string, method: string) => {
  const start = `${state}/${method}_DATA`;
  const success = `${state}/${method}_DATA_SUCCESS`;
  const failure = `${state}/${method}_DATA_FAILURE`;

  return [start, success, failure];
};
