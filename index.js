
export default {
  async fetch(request, context) {
    const { env } = await import("alibaba:workers");
    const test1 = env.test;
    const test2 = env.test2;
    const test3 = env.test3;
    const test4 = env.test4;
    const test5 = env.test5;
    const tEst5 = env.tEst5;
    const Test5 = env.Test5;
    
    return new Response(`test1: ${test1}, test2: ${test2}, test3: ${test3}, test4: ${test4} ,test5: ${test5}, tEst5: ${tEst5}, Test5: ${Test5}`);
  },
};
