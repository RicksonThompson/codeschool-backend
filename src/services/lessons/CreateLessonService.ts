import Lesson from '../../models/Lesson';
import ILessonsRepository from '../../repositories/ILessonsRepository';

interface IRequest {
  title: string;
  description: string;
  module_id: number;
  videoId: string;
}

class CreateClassService {

  constructor (
    private lessonsRepository: ILessonsRepository
  ) {}

  public async execute({title, description, module_id, videoId} :IRequest) :Promise<Lesson> {

    // function verificaChar (videoId: string[]): boolean {
    //   const result = videoId.indexOf('&') > -1

    //   return result;
    // }
    let videoIdDivided = videoId.split("=");

    // const charVerifided = verificaChar(videoIdDivided[1]);

    // if (charVerifided === true) {
    //   videoIdDivided = videoIdDivided[1].split("&")
    // }

    console.log({
      title,
      description,
      module_id,
      videoId: videoIdDivided[1],
    })

    const lesson = await this.lessonsRepository.create({
      title,
      description,
      module_id,
      videoId: videoIdDivided[1],
    });



    return lesson;
  }
}

export default CreateClassService;
