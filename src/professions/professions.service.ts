import { Injectable } from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessionsService {
  constructor (private readonly prismaS:PrismaService){}
  
  async create(data: CreateProfessionDto) {
    return await this.prismaS.professions.create({
      data:{
        about:data.about,
        icon:data.icon,
        name:data.name,
        technicalData:data.technicalData
      }
    });
  }

  async findAll() {
    return await this.prismaS.professions.findMany();
  }

  async findOne(id: number) {
    return await this.prismaS.professions.findFirst({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return await this.prismaS.professions.update({
      where:{id:id},
      data:{
        
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} profession`;
  }

  async exists(id:number){
    const find = await this.prismaS.professions.count({
      where:{id:id}
    });
    return find;
  }
}
