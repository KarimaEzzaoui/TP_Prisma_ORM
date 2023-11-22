// students.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student | undefined> {
    return this.studentsService.findOne(+id);
  }

  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentsService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedStudent: Student): Promise<Student | undefined> {
    return this.studentsService.update(+id, updatedStudent);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentsService.remove(+id);
  }
}
