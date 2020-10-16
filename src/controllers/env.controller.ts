import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EnvService } from '../services/env.service';
import { CreateEnvironment } from '../models/Environment';

@Controller('env')
export class EnvController {
  constructor(private readonly envService: EnvService) {
  }

  @Delete(':project')
  deleteEnv(@Param('project') projectName: string) {
    return this.envService.deleteprojectEnv(projectName);
  }

  @Post()
  createEnv(@Body('settings') settings: CreateEnvironment) {
    return this.envService.createprojectEnv(settings);
  }

  @Patch(':project')
  updateProjectEnv(@Param('project') projectName: string, @Body('settings') settings: CreateEnvironment) {
    return this.envService.updateProject(projectName, settings);
  }

  @Get()
  getAllEnvs() {
    return ({ envs: this.envService.getAllProjectEnvironments() });
  }

  @Get(':project')
  getProjectEnv(@Param('project') projectName: string) {
    return this.envService.getProjectEnvironment(projectName);
  }

}
