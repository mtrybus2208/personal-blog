export const testExpr = (expr, str) => {
  const reg = new RegExp(expr);
  return reg.test(str);
};
