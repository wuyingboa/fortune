

async function list(ctx, next) {
  ctx.state.data = { msg: 'Hello World'}  
}


module.exports = {list}
