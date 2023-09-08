
export function DtoTimeLog(id,desc,link,name,title,hour,minute,minuteDuration,dtLog,support,_fkProject) {
    return {
      id: id,
      desc: desc,
      link: link,
      name: name,
      title: title,
      hour: hour,
      minute: minute,
      minuteDuration: minuteDuration,
      dtLog: dtLog,
      support: support,
      _fkProject: _fkProject,
    };
  }
