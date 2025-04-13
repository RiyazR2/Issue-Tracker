// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/issues/new", "/issues/edit/:id+"],
// };

import { withAuth } from "next-auth/middleware";
export default withAuth({
  secret: process.env.SECRET,
});

export const config = {
  matcher: ["/issues/new", "/issues/edit/:id+"],
};
