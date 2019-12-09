const contact = () => {
    return `
    <div class="container content-body">
    <form>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Please, tell us something. Wrong or good</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-dark">Send</button>
  </form>
    </div>
   `;
};

export {contact as default}