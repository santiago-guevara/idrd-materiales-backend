import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';

describe('ProjetcsController', () => {
  let controller: ProjetcsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
    }).compile();

    controller = module.get<ProjetcsController>(ProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
