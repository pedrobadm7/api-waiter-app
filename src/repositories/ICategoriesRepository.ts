export interface ICreateCategoryDTO {
  name: string;
  icon: string;
}

export type ICategory = ICreateCategoryDTO;

export interface ICategoriesRepository {
  findByName(name: string): Promise<ICreateCategoryDTO | null>;
  list(): Promise<ICreateCategoryDTO[]>;
  create({ name, icon }: ICreateCategoryDTO): Promise<void>;
}
