using BLP.Api.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;


namespace BLP.Api.Controllers
{
    public class CreditEvaluationController : ApiController
    {
        [Route("api/CreditEvaluation/{id:int}")]
        // GET: api/CreditEvaluation/5
        public CreditEvaluationModel GetDetailsById(int id)
        {
            return new CreditEvaluationModel();
        }

        [Route("api/CreditEvaluation")]
        // GET: api/CreditEvaluation
        public IEnumerable<CreditEvaluationModel> GetCreditEvaluationModels()
        {
            return new CreditEvaluationModel[] {};
        }

        [Route("api/CreditEvaluation/{customerId:int}/CreditDefaultRisk", Name ="CreditDefaultRiskByCustomerId")]
        // GET: api/CreditEvaluation
        public bool GetCreditDefaultRisk(int customerId)
        {
            return true;
        }


        [Route("api/CreditEvaluation")]
        [HttpPost]
        // POST: api/CreditEvaluation
        public HttpResponseMessage Post(CreditEvaluationModel model)
        {
            model = model ?? new CreditEvaluationModel();
           var details= UpdateInfo(model);
            var response = Request.CreateResponse(HttpStatusCode.Created);
            //// Generate a link to the new book and set the Location header in the response.
            string uri = Url.Link("CreditDefaultRiskByCustomerId", new { customerId = model.CustomerId });
            response.Headers.Location = new Uri(uri);
            response.Content = new StringContent(details);
            return response;
        }

        private static string UpdateInfo(CreditEvaluationModel model)
        {
            var info = "";
            try
            {
                string path = HttpContext.Current.Server.MapPath(string.Format("~/bin/App_Data/data.json"));
                string json = File.ReadAllText(path);
                List<CreditEvaluationModel> items = JsonConvert.DeserializeObject<List<CreditEvaluationModel>>(json) ?? new List<CreditEvaluationModel>();
                model.CustomerId = items.Count > 0 ? items.Max(x => x.CustomerId) + 1 : 1;
                items.Add(model);
                string newJson = JsonConvert.SerializeObject(items);
                File.WriteAllText(path, newJson);
            }catch(Exception ex)
            {
                info = ex.ToString();
            }
            return info;
        }

        // PUT: api/CreditEvaluation/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CreditEvaluation/5
        public void Delete(int id)
        {
        }
    }
}
