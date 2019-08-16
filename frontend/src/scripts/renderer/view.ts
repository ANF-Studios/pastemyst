export default abstract class View
{
    public abstract render (): string;

    public abstract async run (): Promise<void>;
}