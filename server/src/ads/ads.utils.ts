import { Repository } from 'typeorm';
import { NotFoundException, BadRequestException } from '@nestjs/common';

export async function getOr404(
  repository: Repository<any>,
  id: string,
  relationsList?: any[],
) {
  const relations = {};

  relationsList?.forEach((key) => (relations[key] = true));

  try {
    const item = await repository.findOne({
      where: {
        id,
      },
      relations,
    });
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  } catch (error: any) {
    throw new BadRequestException(error.message);
  }
}
