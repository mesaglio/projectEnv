import { Injectable } from '@nestjs/common';
import { CreateEnvironment, Environment, EnvironmentError } from '../models/Environment';

const environments: Environment[] = [];

@Injectable()
export class EnvService {

  createprojectEnv(newEnvironment: CreateEnvironment): object {
    if (!projectNoExist(newEnvironment.projectName))
      return new EnvironmentError('Ya existe un proyecto con ese nombre');
    const environment: Environment = new Environment(new Date(), newEnvironment.projectName, newEnvironment.setting);
    environments.push(environment);
    return environment;
  }

  deleteprojectEnv(projectName: string): object {
    if (projectNoExist(projectName))
      return new EnvironmentError('No existe un proyecto con ese nombre');
    const index = indexByUsername(projectName);
    const project = environments[index];
    environments.splice(index, 1);
    return project;
  }

  getAllProjectEnvironments(): Environment[] {
    return environments;
  }

  updateProject(projectName: string, newEnvironment: CreateEnvironment) : object{
    const index : number = indexByUsername(projectName);
    if (index == -1)
      return new EnvironmentError('No existe un proyecto con ese nombre');
    environments[index].projectSettings = newEnvironment.setting;
    environments[index].updateTime = new Date();
    return environments[index];
  }

  getProjectEnvironment(projectName: string): object {
    const index : number = indexByUsername(projectName);
    if (index == -1)
      return new EnvironmentError('No existe un proyecto con ese nombre');
    return environments[index]
  }
}

function projectNoExist(projectName: string): boolean {
  return environments.findIndex(project => project.projectName === projectName) == -1;
}

function indexByUsername(projectNAme: string): number {
  return environments.findIndex(project => project.projectName === projectNAme);
}
