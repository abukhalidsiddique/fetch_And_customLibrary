class asifHTTP
{
  async get(url_link)
  {
    const res= await fetch(url_link);
    const resData=await res.json();
    return resData;
  }

  async post(url_link, payLoad)
  {
    const res= await fetch(url_link,
      {
        method: 'post',
        Headers: 
        {
          'content type': 'application/json'
        }, 
        body: JSON.stringify(payLoad)
      } 
      );
      const resData= await res.json();
      return resData;
  }

  async update(url_link, payLoad)
  {
    const res= await fetch(url_link,
      {
        method: 'put',
        Headers: 
        {
          'content type': 'application/json'
        }, 
        body: JSON.stringify(payLoad)
      } 
      );
      const resData= await res.json();
      return resData;
  }

  async delete(url_link)
  {
    const res= await fetch(url_link,
      {
        method: 'delete',
        Headers: 
        {
          'content type': 'application/json'
        }
      } 
      );
      const resData= await 'deleted successfully';
      return resData;
  }
}