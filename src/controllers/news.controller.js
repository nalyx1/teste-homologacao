import { getTopNews } from "../services/newsApi.js";

class NewsController {
  findTopNews = async (request, response) => {
    try {
      const { data } = await getTopNews();
      const formattedNews = [];

      data.articles.map((news) => {
        formattedNews.push({
          autor: news.author,
          titulo: news.title,
          descricao: news.description,
        });
      });

      return response.status(200).send(formattedNews);
    } catch (error) {
      return response.status(500).send({ status: 500, message: `Internal Server Error` });
    }
  };
}
export default new NewsController();
