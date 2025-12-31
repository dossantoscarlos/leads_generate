import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Lead, Prisma } from '../../generated/prisma/client';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async lead(
    leadWhereUniqueInput: Prisma.LeadWhereUniqueInput,
  ): Promise<Lead | null> {
    return this.prisma.lead.findUnique({
      where: leadWhereUniqueInput,
    });
  }

  async leads(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LeadWhereUniqueInput;
    where?: Prisma.LeadWhereInput;
    orderBy?: Prisma.LeadOrderByWithRelationInput;
  }): Promise<Lead[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.lead.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createLead(data: Prisma.LeadCreateInput): Promise<Lead> {
    return this.prisma.lead.create({
      data,
    });
  }

  async updateLead(params: {
    where: Prisma.LeadWhereUniqueInput;
    data: Prisma.LeadUpdateInput;
  }): Promise<Lead> {
    const { where, data } = params;
    return this.prisma.lead.update({
      data,
      where,
    });
  }

  async deleteLead(where: Prisma.LeadWhereUniqueInput): Promise<Lead> {
    return this.prisma.lead.delete({
      where,
    });
  }
}
