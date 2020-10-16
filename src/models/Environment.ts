export class Environment {

  constructor(updateTime: Date, proyectName: string, proyectSettings: string) {
    this.updateTime = updateTime;
    this.projectName = proyectName;
    this.projectSettings = proyectSettings;
  }

  updateTime: Date;
  projectName: string;
  projectSettings: string;
}

export class CreateEnvironment {

  constructor(setting: string, projectName: string) {
    this.setting = setting;
    this.projectName = projectName;
  }

  setting: string;
  projectName: string;
}

export class EnvironmentError {
  constructor(message: string) {
    this.message = message;
  }

  message: string;
}