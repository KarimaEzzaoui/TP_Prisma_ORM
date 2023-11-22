// teachers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
  ) {}

  findAll(): Promise<Teacher[]> {
    return this.teachersRepository.find();
  }

  findOne(id: number): Promise<Teacher | undefined> {
    const options: FindOneOptions<Teacher> = { where: { id } };
    return this.teachersRepository.findOne(options);
  }

  async create(teacher: Teacher): Promise<Teacher> {
    const newTeacher = this.teachersRepository.create(teacher);
    return this.teachersRepository.save(newTeacher);
  }

  async update(id: number, updatedTeacher: Teacher): Promise<Teacher | undefined> {
    await this.teachersRepository.update(id, updatedTeacher);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.teachersRepository.delete(id);
  }
}
