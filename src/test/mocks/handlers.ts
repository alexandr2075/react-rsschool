import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.imgflip.com/get_memes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Bruce',
          url: 'hhh',
        },
      ])
    );
  }),
];
