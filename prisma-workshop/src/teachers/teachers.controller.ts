// teachers.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { Teacher } from './entities/teacher.entity';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Teacher | undefined> {
    return this.teachersService.findOne(+id);
  }

  @Post()
  create(@Body() teacher: Teacher): Promise<Teacher> {
    return this.teachersService.create(teacher);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedTeacher: Teacher): Promise<Teacher | undefined> {
    return this.teachersService.update(+id, updatedTeacher);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teachersService.remove(+id);
  }
}
 