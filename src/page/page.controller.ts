import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { PageModel } from './page.model';
import { FindPageDto } from './dto/find-page.dto';

@Controller('top-page')
export class PageController {
	@Post()
	async create(@Body() dto: Omit<PageModel, '_id'>) {}

	@Get(':id')
	async get(@Param('id') id: string) {}

	@Patch(':id')
	async update(@Param('id') id: string, @Body() dto: PageModel) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@HttpCode(200)
	@Post() // rewrite using query
	async find(@Body() dto: FindPageDto) {}
}
